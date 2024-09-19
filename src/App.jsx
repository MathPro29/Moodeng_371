import { useState } from 'react';
import watermelonImg from './imgs/watermelon.png';
import pumkinImg from './imgs/pumkin.png';
import grassImg from './imgs/grass.png';
import minepigImg from './imgs/minepig.jpeg';
import pigdengImg from './imgs/pigdeng.jpg';

function MaxLevel({ level }) {
  if (level >= 100) {
    return <p>อุ๊ยย...กินเยอะจังอ้วนไปแล้วนะ</p>;
  }
  return null;
}

export default function App() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100);

  const increaseLevel = (amount) => {
    if (level < 100) {
      setLevel(level + amount);
      setSize(size + 10);
    }
    else{
      setLevel(level + amount);
    }
  };

  return (
    <>
      <h1>หมูเด้งเกมส์</h1>
      <h3>Level {level}</h3>
        <img
          src={level >= 100 ? minepigImg : pigdengImg}
          alt={level >= 100 ? "หมูอ้วน" : "หมูเด้ง"}
          id="pigdeng"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transition: 'width 0.2s, height 0.2s'
          }}
        />
        <MaxLevel level={level} />
      <h2>ให้อาหารหมูเด้งสิ</h2>
      <p>คลิ๊กที่อาหารเพื่อเพิ่ม level ของหมูเด้ง</p>
      <div className='foodArea'>
      <img
        className='foodItems'
        src={watermelonImg}
        alt="แตงโม"
        onClick={() => increaseLevel(5)}
        style={{ cursor: 'pointer' }}
      />
      <img
        className='foodItems'
        src={pumkinImg}
        alt="ฟักทอง"
        onClick={() => increaseLevel(10)}
        style={{ cursor: 'pointer' }}
      />
      <img
        className='foodItems'
        src={grassImg}
        alt="หญ้า"
        onClick={() => increaseLevel(15)}
        style={{ cursor: 'pointer' }}
      />
      </div>
      <div>
        <button onClick={() => {
          setLevel(0);
          setSize(100);
        }}>
          รีเซ็ต
        </button>
      </div>
    </>
  );
}


