import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
namespace Schema {
    export namespace open {
        export type PluginView = {
            plugin?: Schema.Plugin;
        };
    }
    export type Plugin = {
        id?: string;
        key?: string & tags.Format<"uuid">;
        channelId?: string;
        state?: "waiting" | "active";
        name: string;
        createdAt?: number;
        appearance: "light" | "dark" | "system";
        labelButton?: boolean;
        labelButtonText?: string;
        labelButtonTextI18nMap?: {
            [key: string]: string;
        };
        buttonType: "legacy" | "customImage" | "iconButton";
        iconButton: "channel" | "channel-filled" | "chat-bubble-alt" | "chat-bubble-alt-filled" | "chat-bubble-filled" | "chat-lightning-filled" | "chat-progress" | "chat-progress-filled" | "chat-question" | "chat-question-filled" | "comment" | "comment-filled" | "communication" | "headset" | "help-filled" | "send-forward" | "send-forward-filled" | "sms" | "sms-filled";
        customImage?: Schema.ImageFile;
        deskImage?: Schema.TinyFile;
        deskMarginX?: number & tags.Type<"int32">;
        deskMarginY?: number & tags.Type<"int32">;
        deskHideButton?: boolean;
        deskPosition?: "left" | "right";
        mobileImage?: Schema.TinyFile;
        mobileMarginX?: number & tags.Type<"int32">;
        mobileMarginY?: number & tags.Type<"int32">;
        mobilePosition?: "left" | "right";
        mobileHideButton?: boolean;
        mobileBubblePosition?: "top" | "bottom";
        urlWhitelist?: string[] & tags.MinItems<0> & tags.MaxItems<5>;
        runRate?: number & tags.Minimum<0> & tags.Maximum<1>;
        facebookPixelId?: string;
        customImageUrl?: string;
        deskImageUrl?: string;
        mobileImageUrl?: string;
        validLabelButtonText?: boolean;
        validLabelButtonTextI18nMap?: boolean;
    };
    export type ImageFile = {
        bucket: string;
        key: string;
        width?: number & tags.Type<"int32">;
        height?: number & tags.Type<"int32">;
        contentType?: string & tags.Pattern<"^image/.*">;
    };
    export type TinyFile = {
        bucket: string;
        key: string;
        width?: number & tags.Type<"int32">;
        height?: number & tags.Type<"int32">;
    };
}
type IAutoViewTransformerInputType = Schema.open.PluginView;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  const plugin = input.plugin;
  // If there's no plugin data, render a friendly markdown message.
  if (!plugin) {
    return {
      type: "Markdown",
      content: "## No plugin data available\nPlease check back later or provide valid plugin information."
    };
  }

  // Helper to build a text component
  const makeText = (text: string, variant?: IAutoView.IAutoViewTextProps["variant"]): IAutoView.IAutoViewTextProps => ({
    type: "Text",
    content: text,
    variant
  });

  // Helper to build a chip
  const makeChip = (
    label: string,
    color: IAutoView.IAutoViewChipProps["color"] = "primary",
    variant: IAutoView.IAutoViewChipProps["variant"] = "filled"
  ): IAutoView.IAutoViewChipProps => ({
    type: "Chip",
    label,
    color,
    variant,
    size: "small"
  });

  // Map plugin properties into a list of DataListItemProps
  const listItems: IAutoView.IAutoViewDataListItemProps[] = [];

  // Unique key
  if (plugin.key) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Key:", "subtitle2"),
      value: makeChip(plugin.key, "secondary", "outlined")
    });
  }

  // Channel ID
  if (plugin.channelId) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Channel ID:", "subtitle2"),
      value: makeText(plugin.channelId, "body2")
    });
  }

  // State
  if (plugin.state) {
    const stateColor: IAutoView.IAutoViewChipProps["color"] =
      plugin.state === "active" ? "success" : "warning";
    listItems.push({
      type: "DataListItem",
      label: makeText("State:", "subtitle2"),
      value: makeChip(plugin.state, stateColor)
    });
  }

  // Appearance
  if (plugin.appearance) {
    // Map appearance to an icon: light->sun, dark->moon, system->desktop
    const appearanceIcons: Record<string, string> = {
      light: "sun",
      dark: "moon",
      system: "desktop"
    };
    listItems.push({
      type: "DataListItem",
      label: makeText("Theme:", "subtitle2"),
      value: {
        type: "Icon",
        id: appearanceIcons[plugin.appearance] || "desktop",
        color: plugin.appearance === "dark" ? "gray" : "orange",
        size: 20
      }
    });
  }

  // Button type
  if (plugin.buttonType) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Button Type:", "subtitle2"),
      value: makeChip(plugin.buttonType, "info")
    });
  }

  // Icon button (show the actual icon)
  if (plugin.iconButton) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Icon Button:", "subtitle2"),
      value: {
        type: "Icon",
        id: plugin.iconButton,
        color: "blue",
        size: 24
      }
    });
  }

  // Run rate
  if (typeof plugin.runRate === "number") {
    const percent = `${(plugin.runRate * 100).toFixed(0)}%`;
    listItems.push({
      type: "DataListItem",
      label: makeText("Run Rate:", "subtitle2"),
      value: makeText(percent, "body2")
    });
  }

  // Facebook Pixel ID
  if (plugin.facebookPixelId) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Facebook Pixel:", "subtitle2"),
      value: makeText(plugin.facebookPixelId, "body2")
    });
  }

  // URL Whitelist: render as a markdown list of links
  if (Array.isArray(plugin.urlWhitelist) && plugin.urlWhitelist.length > 0) {
    const mdList = plugin.urlWhitelist
      .map((url) => `- [${url}](${url})`)
      .join("\n");
    listItems.push({
      type: "DataListItem",
      label: makeText("Allowed URLs:", "subtitle2"),
      value: {
        type: "Markdown",
        content: mdList
      }
    });
  }

  // Custom image URL (if any)
  if (plugin.customImageUrl) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Custom Image:", "subtitle2"),
      value: {
        type: "Image",
        src: plugin.customImageUrl,
        alt: "Custom Plugin Image"
      }
    });
  }

  // Desk image URL
  if (plugin.deskImageUrl) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Desktop Image:", "subtitle2"),
      value: {
        type: "Image",
        src: plugin.deskImageUrl,
        alt: "Desktop Plugin Image"
      }
    });
  }

  // Mobile image URL
  if (plugin.mobileImageUrl) {
    listItems.push({
      type: "DataListItem",
      label: makeText("Mobile Image:", "subtitle2"),
      value: {
        type: "Image",
        src: plugin.mobileImageUrl,
        alt: "Mobile Plugin Image"
      }
    });
  }

  // Assemble the DataList
  const dataList: IAutoView.IAutoViewDataListProps = {
    type: "DataList",
    childrenProps: listItems
  };

  // Compose the card header
  const header: IAutoView.IAutoViewCardHeaderProps = {
    type: "CardHeader",
    title: plugin.name,
    description: plugin.state ? plugin.state.charAt(0).toUpperCase() + plugin.state.slice(1) : undefined,
    startElement: {
      type: "Icon",
      id: plugin.iconButton || "plugin",
      color: "blue",
      size: 32
    },
    endElement: plugin.createdAt
      ? makeText(new Date(plugin.createdAt).toLocaleString(), "caption")
      : undefined
  };

  // Wrap the DataList in CardContent
  const content: IAutoView.IAutoViewCardContentProps = {
    type: "CardContent",
    childrenProps: dataList
  };

  // Return a vertical card with header and content
  return {
    type: "VerticalCard",
    childrenProps: [header, content]
  };
}
