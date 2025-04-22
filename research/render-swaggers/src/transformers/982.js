export function transform($input) {
    return visualizeData($input);
}
function visualizeData(input) {
    // Format the creation date in the user's locale for readability
    const formattedDate = new Date(input.created_at).toLocaleString();
    // Build a DataList to show the creation timestamp and the raw SSH key
    const dataList = {
        type: "DataList",
        childrenProps: [
            {
                type: "DataListItem",
                label: {
                    type: "Text",
                    content: "Created At"
                },
                value: {
                    type: "Text",
                    content: formattedDate
                },
            },
            {
                type: "DataListItem",
                label: {
                    type: "Text",
                    content: "Public Key"
                },
                // Display the SSH key inside a markdown code block for better UX on both desktop & mobile
                value: {
                    type: "Markdown",
                    content: "ssh-rsa\n" + input.key + "\n```",
                },
            },
        ],
    };
    // Header of the card: show a key icon, the title, and the raw ID
    const header = {
        type: "CardHeader",
        startElement: {
            type: "Icon",
            id: "key", // uses FontAwesome's "key" icon
            size: 32,
            color: "teal",
        },
        title: input.title,
        description: `ID: ${input.id}`,
    };
    // Footer with an action button to copy the key
    const footer = {
        type: "CardFooter",
        childrenProps: {
            type: "Button",
            variant: "outlined",
            size: "small",
            startElement: {
                type: "Icon",
                id: "copy",
                size: 20,
                color: "gray",
            },
            label: "Copy Key",
        },
    };
    // Assemble everything into a responsive vertical card
    return {
        type: "VerticalCard",
        childrenProps: [
            header,
            { type: "CardContent", childrenProps: dataList },
            footer,
        ],
    };
}
//# sourceMappingURL=982.js.map