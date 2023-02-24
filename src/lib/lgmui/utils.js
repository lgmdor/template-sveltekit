export const outsideClick = (node, payload) => {
	const handleClick = (event) => {
		if (
			node &&
			!node.contains(event.target) &&
			!event.defaultPrevented &&
			!payload.excludeNode.contains(event.target)
		) {
			if (payload.settings.stopPropagation) {
				event.stopPropagation();
			}
			node.dispatchEvent(new CustomEvent("outsideclick", node));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
};

export const storeAdd = (store, item) => store.update(($items) => [...$items, item]);

export const storeRemove = (store, item) =>
	store.update(($items) => $items.filter((itemFilter) => itemFilter != item));
