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

    const iconMap = {
      "🏠": "home", "🔬": "microscope", "🩺": "stethoscope", "💰": "coins",
      "👤": "user", "👥": "users", "👨‍💼": "briefcase", "💼": "briefcase",
      "💾": "save", "📈": "trend", "📊": "chart", "📋": "clipboard",
      "📭": "inbox", "🎯": "target", "👁": "eye", "🕘": "clock",
      "🗓": "calendar", "⚡": "bolt", "🌧": "rain", "🔍": "search",
      "🧠": "brain", "📝": "file", "📄": "file", "🤖": "bot",
      "🔐": "lock", "🔒": "lock", "📁": "folder", "💡": "light",
      "💳": "card", "🧾": "receipt", "❤": "heart", "🌱": "leaf",
      "🏆": "award", "🧪": "flask", "⚙": "settings", "🧮": "calculator",
      "✅": "check", "✓": "check", "✔": "check", "✕": "close", "⚠": "warning",
      "🔵": "circle", "🟢": "circle", "🟣": "circle", "🔴": "circle", "🟠": "circle"
    };
    const iconTone = { "🔵": "blue", "🟢": "green", "🟣": "purple", "🔴": "red", "🟠": "orange" };
    const iconPattern = new RegExp("(" + Object.keys(iconMap).sort(function (a, b) { return b.length - a.length; }).join("|") + ")(?:\\uFE0F)?", "g");

    function replaceIcons(root) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || parent.closest("script, style, svg, textarea, input")) return NodeFilter.FILTER_REJECT;
          iconPattern.lastIndex = 0;
          return iconPattern.test(node.data) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (node) {
        const fragment = document.createDocumentFragment();
        let cursor = 0;
        iconPattern.lastIndex = 0;
        let match;
        while ((match = iconPattern.exec(node.data))) {
          if (match.index > cursor) fragment.append(node.data.slice(cursor, match.index));
          const raw = match[1];
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("class", "ui-symbol" + (iconTone[raw] ? " ui-symbol--" + iconTone[raw] : ""));
          svg.setAttribute("aria-hidden", "true");
          svg.setAttribute("focusable", "false");
          const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
          use.setAttribute("href", "ui-icons.svg#" + iconMap[raw]);
          svg.append(use);
          fragment.append(svg);
          cursor = match.index + match[0].length;
        }
        if (cursor < node.data.length) fragment.append(node.data.slice(cursor));
        node.replaceWith(fragment);
      });
    }

    replaceIcons(document.body);
    new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE && node.parentElement) replaceIcons(node.parentElement);
          else if (node.nodeType === Node.ELEMENT_NODE) replaceIcons(node);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  });
})();
