import React, { useState } from 'react'
import iro from '@jaames/iro'

function ColorPicker({ chooseColour }) {
  const [selectColour, setSelectColour] = useState('')

  const colorPicker = new iro.ColorPicker('#boxPicker', {
    width: 250,
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#fff',
    layout: [
      {
        component: iro.ui.Box,
      },
      {
        component: iro.ui.Slider,
        options: {
          id: 'hue-slider',
          sliderType: 'hue',
        },
      },
    ],
  })

  function handleColorChange(color) {
    console.log(color.hexString)
    setSelectColour(event.target.color)
  }

  function handleColourSelected(color) {
    setSelectColour(color)
    chooseColour(selectColour)
  }
  return (
    <>
      <div id="boxPicker" onChange={handleColorChange} values={selectColour}>
        {colorPicker}
      </div>
    </>
  )
}

// {/* <div className="ColorPicker" id="picker" onChange={handleColorChange}>
// {colorPicker}
// </div> */}

// let colorPicker = new iro.ColorPicker('#boxPicker', {
//   width: 250,
//   color: 'rgb(255, 0, 0)',
//   borderWidth: 1,
//   borderColor: '#fff',
//   layout: [
//     {
//       component: iro.ui.Box,
//     },
//     {
//       component: iro.ui.Slider,
//       options: {
//         id: 'hue-slider',
//         sliderType: 'hue',
//       },
//     },
//   ],
// })

// let hex = colorPicker.color.hexString

// function handleColorChange(color) {
//   console.log(color.hexString)
// }

// function handleChange(event) {
//   setInput({
//     ...input,
//     [event.target.name]: event.target.value,
//   })
//   // const { name, value } = event.target
//   // setInput((newBoardInfo) => {
//   //   return {}
//   // })
// }

export default ColorPicker

// o  const ref = useRef()
// const colorPicker = useRef()

// useEffect(() => {
//   const cp = (colorPicker.current = new iro.ColorPicker(ref.current, {
//     color,
//     width: 150,
//     borderWidth: 1,
//     borderColor: '#fff',
//     layout: [
//       { component: iro.ui.Box },
//       {
//         component: iro.ui.Slider,
//         options: {
//           id: 'hue-slider',
//           sliderType: 'hue',
//         },
//       },
//     ],
//   }))
//   cp.on('color:change', (color) => setColor(color.hexString))
// }, [])
// return <div ref={ref} />
