export default function InputSection() {
    const calculateAge = () => {
        return
    }
    return (
      <div style={{margin: '10px', padding: '15px', boxShadow: '0 4px 8px 0 #00000033', display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob"/>
        <div style={{display: 'flex', gap: '10px'}}>
            <button style={{padding: '8px 15px'}} onClick={calculateAge()}>Get your age</button>
            <button style={{padding: '8px 15px'}}>Reset</button>
        </div>
      </div>
    )
  }