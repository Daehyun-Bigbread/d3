function toHierarchical(data) {
	const idToNodeMap = new Map();

	// Create a copy of each node and map it by its ID
	data.nodes.forEach((node) => {
		const nodeCopy = Object.assign({}, node);
		nodeCopy.children = [];
		idToNodeMap.set(nodeCopy.id, nodeCopy);
	});

	// Populate the children arrays using the links
	data.links.forEach((link) => {
		const parent = idToNodeMap.get(link.source);
		const child = idToNodeMap.get(link.target);
		if (parent && child) {
			parent.children.push(child);
		}
	});

	// The root is the 'IT' node in this case
	return idToNodeMap.get("IT");
}

const originalData = {
	nodes: [
		/*... your nodes data ...*/
	],
	links: [
		/*... your links data ...*/
	],
};

const hierarchicalData = toHierarchical(originalData);
console.log(hierarchicalData);
