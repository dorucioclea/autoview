export function transform($input) {
    return visualizeData($input);
}
function visualizeData(input) {
    // Determine an icon to reflect subscription status
    const subscriptionIcon = {
        type: "Icon",
        id: input.subscribed ? "bell" : "bell-slash",
        color: input.subscribed ? "green" : "gray",
        size: 24,
    };
    // Build a list of data items for the DataList
    const dataItems = [
        {
            type: "DataListItem",
            label: { type: "Text", variant: "body2", content: "Subscribed" },
            value: {
                type: "Chip",
                label: input.subscribed ? "Yes" : "No",
                color: input.subscribed ? "success" : "error",
                variant: "filled",
            },
        },
        {
            type: "DataListItem",
            label: { type: "Text", variant: "body2", content: "Ignored" },
            value: {
                type: "Chip",
                label: input.ignored ? "Yes" : "No",
                color: input.ignored ? "warning" : "success",
                variant: "filled",
            },
        },
        {
            type: "DataListItem",
            label: { type: "Text", variant: "body2", content: "Reason" },
            value: input.reason
                ? { type: "Markdown", content: input.reason }
                : { type: "Text", variant: "body2", content: "N/A" },
        },
        {
            type: "DataListItem",
            label: { type: "Text", variant: "body2", content: "Created At" },
            value: {
                type: "Text",
                variant: "body2",
                content: input.created_at
                    ? new Date(input.created_at).toLocaleString()
                    : "N/A",
            },
        },
    ];
    // Prepare action buttons in the footer
    const footerButtons = [
        {
            type: "Button",
            label: "View Subscription",
            href: input.url,
            variant: "text",
            startElement: {
                type: "Icon",
                id: "external-link",
                size: 16,
                color: "cyan",
            },
        },
    ];
    if (input.thread_url) {
        footerButtons.push({
            type: "Button",
            label: "View Thread",
            href: input.thread_url,
            variant: "text",
            startElement: {
                type: "Icon",
                id: "comment-dots",
                size: 16,
                color: "blue",
            },
        });
    }
    if (input.repository_url) {
        footerButtons.push({
            type: "Button",
            label: "Repository",
            href: input.repository_url,
            variant: "text",
            startElement: {
                type: "Icon",
                id: "book",
                size: 16,
                color: "violet",
            },
        });
    }
    // Compose a vertical card summarizing the subscription
    return {
        type: "VerticalCard",
        childrenProps: [
            {
                type: "CardHeader",
                title: "Thread Subscription",
                description: input.url,
                startElement: subscriptionIcon,
            },
            {
                type: "CardContent",
                childrenProps: {
                    type: "DataList",
                    childrenProps: dataItems,
                },
            },
            {
                type: "CardFooter",
                childrenProps: footerButtons,
            },
        ],
    };
}
//# sourceMappingURL=370.js.map