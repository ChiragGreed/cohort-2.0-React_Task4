import Book from "./Component/Book"

const App = () => {

  return (
    <div className="grid grid-cols-4 gap-4 p-8 bg-[#EEE9E5]">
      <Book
        number="1"
        title="FASHION"
        author="Jennifer Kingsley"
        description="exploring the new range of winter wear."
        cover="https://i.pinimg.com/1200x/53/03/f6/5303f6e1f0954d4fb3ceeab180336888.jpg"
      />
      <Book
        number="2"
        title="STYLE"
        author="Michael Turner"
        description="a closer look at modern street fashion."
        cover="https://i.pinimg.com/736x/c5/31/5e/c5315e15b366441d5196fd0611adb305.jpg"
      />

      <Book
        number="3"
        title="LIFESTYLE"
        author="Amanda Brooks"
        description="embracing comfort and elegance in daily wear."
        cover="https://i.pinimg.com/736x/cc/49/c6/cc49c67898626a5a3c4f2f7ca6e999a7.jpg"
      />

      <Book
        number="4"
        title="TRENDS"
        author="Alex Hart"
        description="highlighting the top fashion trends this season."
        cover="https://i.pinimg.com/1200x/71/09/08/710908384be88348e46a0d533c38faec.jpg"
      />

      <Book
        number="5"
        title="DESIGN"
        author="Daniel Moore"
        description="behind the scenes of contemporary clothing design."
        cover="https://i.pinimg.com/1200x/52/09/87/520987c199ab6ddc1853a97a4ba1fdfb.jpg"
      />

      <Book
        number="6"
        title="URBAN"
        author="Sophia Reed"
        description="inspiration drawn from city life and culture."
        cover="https://i.pinimg.com/736x/a0/9a/6c/a09a6c525fb5fa4e7fd707d5f000ef48.jpg"
      />

      <Book
        number="7"
        title="VINTAGE"
        author="Ethan Collins"
        description="reviving classic fashion with a modern twist."
        cover="https://i.pinimg.com/1200x/6e/75/25/6e7525b9784f9332f2b216a6952b4635.jpg"
      />

      <Book
        number="8"
        title="Green"
        author="Lily Nguyen"
        description="eco-friendly approaches shaping the fashion industry."
        cover="https://i.pinimg.com/1200x/6c/cf/c5/6ccfc5caa681debbfe098c34680a6f22.jpg"
      />

      <Book
        number="9"
        title="RUNWAY"
        author="Alexander Price"
        description="exclusive insights from international fashion shows."
        cover="https://i.pinimg.com/736x/c9/5e/71/c95e71b75a935189121695f3d311df7b.jpg"
      />


    </div>

  )
}

export default App
