export function transform($input) {
    return visualizeData($input);
}
function visualizeData(input) {
    // Helper: map OS names to FontAwesome icon ids
    const mapOsToIcon = (os) => {
        const key = os.toLowerCase();
        if (key.includes("linux"))
            return "linux";
        if (key.includes("windows"))
            return "windows";
        if (key.includes("mac") || key.includes("darwin") || key.includes("os x"))
            return "apple";
        // fallback generic desktop icon
        return "desktop";
    };
    // Helper: map runner status to a Chip color
    const mapStatusColor = (status) => {
        const key = status.toLowerCase();
        if (key === "online" || key === "idle")
            return "success";
        if (key === "offline" || key === "offline")
            return "error";
        if (key === "busy" || key === "running")
            return "warning";
        return "gray";
    };
    // Build DataList items for key/value display
    const dataListItems = [];
    // ID
    dataListItems.push({
        type: "DataListItem",
        label: { type: "Text", content: "ID" },
        value: { type: "Text", content: input.id.toString() },
    });
    // Runner Group ID (optional)
    if (input.runner_group_id !== undefined) {
        dataListItems.push({
            type: "DataListItem",
            label: { type: "Text", content: "Group ID" },
            value: { type: "Text", content: input.runner_group_id.toString() },
        });
    }
    // OS with an icon inside a Chip
    const osIconId = mapOsToIcon(input.os);
    dataListItems.push({
        type: "DataListItem",
        label: { type: "Text", content: "OS" },
        value: {
            type: "Chip",
            label: input.os,
            startElement: {
                type: "Icon",
                id: osIconId,
                size: 20,
                color: "blue",
            },
            color: "teal",
            size: "medium",
            variant: "filled",
        },
    });
    // Status as colored Chip
    dataListItems.push({
        type: "DataListItem",
        label: { type: "Text", content: "Status" },
        value: {
            type: "Chip",
            label: input.status,
            color: mapStatusColor(input.status),
            size: "medium",
            variant: "filled",
        },
    });
    // Busy flag
    dataListItems.push({
        type: "DataListItem",
        label: { type: "Text", content: "Busy" },
        value: {
            type: "Chip",
            label: input.busy ? "Yes" : "No",
            color: input.busy ? "warning" : "success",
            size: "small",
            variant: "outlined",
        },
    });
    // Ephemeral (optional)
    if (input.ephemeral !== undefined) {
        dataListItems.push({
            type: "DataListItem",
            label: { type: "Text", content: "Ephemeral" },
            value: {
                type: "Chip",
                label: input.ephemeral ? "Yes" : "No",
                color: input.ephemeral ? "info" : "gray",
                size: "small",
                variant: "outlined",
            },
        });
    }
    // Build runner labels as Chips in a ChipGroup
    const labelChips = input.labels.map(label => ({
        type: "Chip",
        label: label.name,
        color: label.type === "read-only" ? "info" : "secondary",
        size: "small",
        variant: "outlined",
    }));
    // Compose the final UI as a VerticalCard
    return {
        type: "VerticalCard",
        childrenProps: [
            // Header: runner name and ID, with OS icon
            {
                type: "CardHeader",
                title: input.name,
                description: `#${input.id}`,
                startElement: {
                    type: "Icon",
                    id: osIconId,
                    size: 28,
                    color: "blue",
                },
            },
            // Content: key/value DataList
            {
                type: "CardContent",
                childrenProps: {
                    type: "DataList",
                    childrenProps: dataListItems,
                },
            },
            // Footer: list of runner labels
            ...(labelChips.length > 0
                ? [
                    {
                        type: "CardFooter",
                        childrenProps: {
                            type: "ChipGroup",
                            childrenProps: labelChips,
                        },
                    },
                ]
                : []),
        ],
    };
}
//# sourceMappingURL=592.js.map