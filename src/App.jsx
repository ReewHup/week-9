const App = () => {
  const name = "Taweesak";
  const age = "21";
  const phone = "0929683634"
  return (
    <>
    <h1>{name}</h1>
    {age >= 18 && <p>บรรลุนิติภาวะ</p> }
    {age <= 17 && <p>ไม่บรรลุนิติภาวะ</p> }
    <h1>{phone}</h1>
    <div className="text">App</div>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae quae sunt ad animi, est dolore neque nemo, quos pariatur quas praesentium? Perspiciatis, labore! Labore doloremque suscipit velit at atque.</p>
    <input type="text" />
    <br />
    <br />
    <br />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed optio ex quibusdam numquam adipisci corporis esse neque accusamus minus. Illo explicabo consectetur eos dicta ex magni ipsum voluptates suscipit cum?</p>
    <p style={
            {
              color:'blue',
              fontSize: 18,
              border:'1px solid red',
              textAlign:'left',
              padding: 20
            }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, facere laborum natus excepturi, fugiat veniam hic nam est esse mollitia ullam maiores aliquam tenetur consequatur minus, iusto facilis quis laudantium.
    </p>
    <div className="text-6xl font-bold text-green-700">Test Test</div>
    
    </>
  )
}

export default App
