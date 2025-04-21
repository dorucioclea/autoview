import type * as IAutoView from "@autoview/interface";
namespace Schema {
    export namespace IApiOrgsPrivateRegistriesPublicKey {
        export type GetResponse = {
            /**
             * The identifier for the key.
            */
            key_id: string;
            /**
             * The Base64 encoded public key.
            */
            key: string;
        };
    }
}
type IAutoViewTransformerInputType = Schema.IApiOrgsPrivateRegistriesPublicKey.GetResponse;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // We use a vertical card to display the public key data in a structured, responsive layout.
  // - CardHeader shows the key identifier with a key icon.
  // - CardContent renders the Base64 public key in a fenced code block via Markdown.
  // - CardFooter provides a copy icon button for quick copying of the key.

  // Prepare the markdown content for the public key code block
  const publicKeyMarkdown = [
    "#### Public Key",
    "",
    input.key,
    "```",
  ].join("\n");

  return {
    type: "VerticalCard",
    childrenProps: [
      {
        // Header with the key ID and a key icon
        type: "CardHeader",
        title: input.key_id,
        startElement: {
          type: "Icon",
          id: "key",            // FontAwesome "key" icon
          size: 20,
          color: "blue",
        },
      },
      {
        // Content showing the Base64 key in a code block
        type: "CardContent",
        childrenProps: {
          type: "Markdown",
          content: publicKeyMarkdown,
        },
      },
      {
        // Footer with a copy button for convenience
        type: "CardFooter",
        childrenProps: {
          type: "IconButton",
          icon: "copy",         // FontAwesome "copy" icon
          variant: "outlined",
          color: "primary",
          size: "medium",
        },
      },
    ],
  };
}
