import RootNavigation from "./navigation/RootNavigation";
import { HEIGHT, WIDTH } from "./common/Dimension";
function App() {
  return (
    <div style={{ height: HEIGHT, width: WIDTH }}>
      <RootNavigation />
    </div>
  );
}

export default App;
