import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

export default function Container() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '60%', backgroundColor: '#fff', padding: '20px', gap: '10px'}}>
      <h1>Age Calculator</h1>
      <p style={{textAlign: 'center'}}>Calculate the age of a person, place or thing. The age calculator calculates age given a date of birth in years, months and days. You can also use this calculator to find length of time between two dates.</p>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <InputSection />
        <OutputSection />
      </div>
    </div>
  )
}
