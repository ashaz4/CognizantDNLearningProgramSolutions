import { CalculateScore } from "./Components/CalculateScore";
function App()
{
  return(
    <div>
      <CalculateScore Name={"Ashaz"}
      School={"Birla High School"}
      total={300}
      goal={3}
      />
    </div>
  )
}
export default App;