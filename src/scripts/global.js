const navToggle = document.querySelector(".nav-toggle");
const navLinksList = document.querySelector(".nav-links");

if (navToggle && navLinksList) {
	navToggle.addEventListener("click", () => {
		const isOpen = navToggle.classList.toggle("open");
		navLinksList.classList.toggle("open");
		navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
	});

	navLinksList.querySelectorAll("a").forEach(link => {
		link.addEventListener("click", () => {
			navToggle.classList.remove("open");
			navLinksList.classList.remove("open");
			navToggle.setAttribute("aria-expanded", "false");
		});
	});
}

let navResizeTimer;

window.addEventListener("resize", () => {
	navLinksList.classList.add("no-transition");

	clearTimeout(navResizeTimer);
	navResizeTimer = setTimeout(() => {
		navLinksList.classList.remove("no-transition");
	}, 200);
});