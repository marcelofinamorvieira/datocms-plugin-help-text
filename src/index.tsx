import {
  connect,
  IntentCtx,
  RenderItemFormOutletCtx,
} from "datocms-plugin-sdk";
import { render } from "./utils/render";
import ConfigScreen from "./entrypoints/ConfigScreen";
import "datocms-react-ui/styles.css";
import MyCustomOutlet from "./entrypoints/HelpText";

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  itemFormOutlets(model, ctx: IntentCtx) {
    //you can change the condition here to adjust under which models the message should be shown
    if (model.attributes.api_key !== "post") {
      return [];
    }
    return [
      {
        id: "myOutlet",
      },
    ];
  },
  renderItemFormOutlet(outletId, ctx: RenderItemFormOutletCtx) {
    return render(<MyCustomOutlet ctx={ctx} />);
  },
});
