import React,{useRef} from 'react'
import Card from './Card'

const Foreground = () => {

    const bound = useRef(null);

    const data = [{
        detail:"This is sample text",
        size : '0.23mbs',
        isClose : true,
        label:{   
        isLabel : true,
        color : 'blue',
        labelDetail : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni et explicabo nisi id!"
        },
    },
    {
        detail:"This is sample text",
        size : '0.23mbs',
        isClose : true,
        label:{   
        isLabel : true,
        color: 'red',
        labelDetail : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni et explicabo nisi id!"
        },
    },{
        detail:"This is sample text",
        size : '0.23mbs',
        isClose : true,
        label:{   
        isLabel : false,
        color: 'green',
        labelDetail : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni et explicabo nisi id!"
        },
    }];

  return (
    <>
        <div ref={bound} className="w-full h-screen fixed flex-shrink-0 flex flex-wrap gap-10 p-7" >
            { data.map((item,index)=>(
              <Card bound={bound} data={item} />
            )) }
        </div>
    </>
  )
}

export default Foreground