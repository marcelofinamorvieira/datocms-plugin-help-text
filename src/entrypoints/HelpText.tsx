import { RenderItemFormOutletCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";
import ReactMarkdown from "react-markdown";

type PropTypes = {
  ctx: RenderItemFormOutletCtx;
};

export default function MyCustomOutlet({ ctx }: PropTypes) {
  return (
    <Canvas ctx={ctx}>
      {/* here, you can edit the message you want to display above the specified models */}
      {/* i've added the ReactMarkdown package to allow for the markdown notation on the messages as well */}
      <ReactMarkdown># Hello, *world*! </ReactMarkdown>
    </Canvas>
  );
}
