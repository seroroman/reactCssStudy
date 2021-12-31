import { CssModules } from "./components/CssModules";
import { InlineStyles } from "./components/InlineStyles";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
