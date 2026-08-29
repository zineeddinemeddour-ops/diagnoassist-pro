(function () {
  const nativeStorage = window.localStorage;
  const appKey = (key) => key === "diagStateOwner" || key.startsWith("diag");
  let authenticated = false;

  function wireValue(value) {
    return value === null || value === undefined ? "" : String(value);
  }

  window.backendStorage = {
    getItem(key) {
      return nativeStorage.getItem(key);
    },
    setItem(key, value) {
      const text = wireValue(value);
      nativeStorage.setItem(key, text);
      if (!authenticated || key === "diagUser" || key === "diagUsers" || key === "diagStateOwner") return;
      fetch("/api/state", {
        method: "PUT",
        credentials: "same-origin",
        keepalive: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ key, value: text }),
      }).catch(() => {});
    },
    removeItem(key) {
      nativeStorage.removeItem(key);
      if (!authenticated || key === "diagUser" || key === "diagUsers" || key === "diagStateOwner") return;
      fetch(`/api/state?key=${encodeURIComponent(key)}`, {
        method: "DELETE",
        credentials: "same-origin",
        keepalive: true,
      }).catch(() => {});
    },
    clear() {
      for (let index = nativeStorage.length - 1; index >= 0; index -= 1) {
        const key = nativeStorage.key(index);
        if (key && appKey(key)) nativeStorage.removeItem(key);
      }
    },
    key(index) {
      return nativeStorage.key(index);
    },
    get length() {
      return nativeStorage.length;
    },
  };

  window.backendLogout = async function () {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" });
    } catch {}
    window.backendStorage.clear();
    window.location.reload();
  };

  window.backendReady = (async function () {
    try {
      const response = await fetch("/api/state", { credentials: "same-origin", cache: "no-store" });
      if (!response.ok) return;
      const payload = await response.json();
      authenticated = Boolean(payload.authenticated);
      if (!authenticated || !payload.state) return;
      const user = payload.state.diagUser;
      const owner = user && user.id ? String(user.id) : "";
      if (owner && nativeStorage.getItem("diagStateOwner") !== owner) {
        for (let index = nativeStorage.length - 1; index >= 0; index -= 1) {
          const key = nativeStorage.key(index);
          if (key && appKey(key)) nativeStorage.removeItem(key);
        }
      }
      for (const [key, value] of Object.entries(payload.state)) {
        nativeStorage.setItem(key, key === "diagUser" ? JSON.stringify(value) : wireValue(value));
      }
      if (owner) nativeStorage.setItem("diagStateOwner", owner);
    } catch {
      authenticated = false;
    }
  })();

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".field").forEach(function (field, index) {
      const label = field.querySelector("label");
      const control = field.querySelector("input, select, textarea");
      if (!label || !control) return;
      if (!control.id) control.id = `diag-field-${index + 1}`;
      if (!label.htmlFor) label.htmlFor = control.id;
    });
  });
})();
