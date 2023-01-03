import React from 'react'
import { useState } from 'react'

function Home() {

    const [data, setData] = useState([
    {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'
  },
  {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
  },
  {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
  },
  {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
  }
    ])

    let numElem = data.length

  return (
      <div className='main-container'>
          <h1>{numElem} Birthdays Today</h1>
        {data.map(dat => (
            <div key={dat.id} className='container'>
                <div className='photo'>
                    <img src={dat.image} alt="" />
                </div>   
                <div className='info'>
                    <h3>{dat.name}</h3>
                    <h3>{dat.age} years old</h3>
                </div>               
            </div>
            
        ))}
          <div className='button-container'>
              <button onClick={() => setData([])}>Clear All</button>
        </div>
    </div>
  )
}

export default Home