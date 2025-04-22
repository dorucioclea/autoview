export function transform($input) {
    return visualizeData($input);
}
function visualizeData(input) {
    var _a;
    // Format creation date nicely, fallback to raw string on invalid date
    const formattedDate = input.created_at
        ? (() => {
            const d = new Date(input.created_at);
            return isNaN(d.getTime()) ? input.created_at : d.toLocaleString();
        })()
        : undefined;
    // Card header with icon, title, and creation timestamp
    const header = {
        type: "CardHeader",
        title: (_a = input.title) !== null && _a !== void 0 ? _a : "Codespaces Public Key",
        description: formattedDate,
        startElement: {
            type: "Icon",
            id: "key",
            color: "teal",
            size: 24,
        },
    };
    // Build a list of key properties: key_id, optional id, optional url
    const dataListItems = [];
    // Always include the key identifier
    dataListItems.push({
        type: "DataListItem",
        label: { type: "Text", content: "Key ID" },
        value: { type: "Text", content: input.key_id },
    });
    // If a numeric record ID is provided, show it as a chip
    if (input.id !== undefined) {
        dataListItems.push({
            type: "DataListItem",
            label: { type: "Text", content: "Record ID" },
            value: {
                type: "Chip",
                label: input.id.toString(),
                variant: "outlined",
            },
        });
    }
    // If a URL is provided, render it as a link-style button
    if (input.url) {
        dataListItems.push({
            type: "DataListItem",
            label: {
                type: "Text",
                content: [
                    { type: "Icon", id: "external-link", color: "blue", size: 16 },
                    " URL",
                ],
            },
            value: {
                type: "Button",
                label: input.url,
                href: input.url,
                variant: "text",
                startElement: { type: "Icon", id: "link", size: 16 },
            },
        });
    }
    // Assemble the data list
    const dataList = {
        type: "DataList",
        childrenProps: dataListItems,
    };
    // Show the raw public key in a code block via markdown for readability
    const keyBlock = {
        type: "Markdown",
        content: [
            "text",
            input.key,
            "```"
        ].join("\n"),
    };
    // Card content holds the details list and the key code block
    const content = {
        type: "CardContent",
        childrenProps: [dataList, keyBlock],
    };
    // Return a vertical card combining header and content
    return {
        type: "VerticalCard",
        childrenProps: [header, content],
    };
}
//# sourceMappingURL=434.js.map