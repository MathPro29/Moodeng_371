import { useState } from 'react';

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
      <div>
        <img
          src={level >= 100 ? "/imgs/minepig.jpeg" : "/imgs/pigdeng.jpg"}
          alt={level >= 100 ? "หมูอ้วน" : "หมูเด้ง"}
          id="pigdeng"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transition: 'width 0.2s, height 0.2s'
          }}
        />
        <MaxLevel level={level} />
      </div>
      <h2>ให้อาหารหมูเด้งสิ</h2>
      <p>คลิ๊กที่อาหารเพื่อเพิ่ม level ของหมูเด้ง</p>
      <img
        className='foodItems'
        src="/imgs/watermelon.png"
        alt="แตงโม"
        onClick={() => increaseLevel(5)}
        style={{ cursor: 'pointer' }}
      />
      <img
        className='foodItems'
        src="/imgs/pumkin.png"
        alt="ฟักทอง"
        onClick={() => increaseLevel(10)}
        style={{ cursor: 'pointer' }}
      />
      <img
        className='foodItems'
        src="/imgs/grass.png"
        alt="หญ้า"
        onClick={() => increaseLevel(15)}
        style={{ cursor: 'pointer' }}
      />
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


