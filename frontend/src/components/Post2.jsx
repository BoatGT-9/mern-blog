import React from 'react';
import { Link } from 'react-router-dom';

const Post2 = () => {
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                'url(https://static.thairath.co.th/media/dFQROr7oWzulq5FZYANdwnAt3GO5mBAEgucXrAzoJvwwQ0tnTanbK9L5jIo6RcXS7js.webp)',
            }}
          ></div>
          <ul className="details">
            <li className="author">
              <Link to="#">Surapong</Link>
            </li>
            <li className="date">Des. 12, 2023</li>
            {/* <li className="tags">
              <ul>
                <li>
                  <Link to="#">Learn</Link>
                </li>
                <li>
                  <Link to="#">Code</Link>
                </li>
                <li>
                  <Link to="#">HTML</Link>
                </li>
                <li>
                  <Link to="#">CSS</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className="description">
          <h1>แปรขยะพลาสติกเป็นบล็อกปูพื้น</h1>
          {/* <h2>Opening a door to the future</h2> */}
          <p style={{overflow: "hidden"}}>
          “ขยะพลาสติก” ถือเป็นปัญหาที่ส่งผลกระทบรุนแรงต่อสิ่งแวดล้อมของโลก
          ที่ผ่านมาประเทศไทยได้ชื่อว่ามีปริมาณขยะพลาสติกติดอันดับ 5 ของโลก
          ในแต่ละปีมีปริมาณขยะพลาสติกมากกว่า 2 ล้านตัน
          ปัญหาเหล่านี้นอกจากจะพบมากในกลุ่มครัวเรือนแล้ว
          ตามแหล่งท่องเที่ยวสำคัญๆของประเทศ
          ซึ่งมีนักท่องเที่ยวอยู่รวมกันเป็นจำนวนมาก ยิ่งก่อให้เกิดปัญหาเรื้อรัง
          จากปัญหาดังกล่าวทำให้เกิดการวิจัยการนำเอาขยะพลาสติกกลับมาใช้ประโยชน์อีกครั้ง
          ด้วยการนำมาทำบล็อกปูพื้นถนน คณะวิทยาศาสตร์และเทคโนโลยี
          ม.ราชภัฏเชียงใหม่
          เริ่มทำการวิจัยเรื่องนี้อย่างจริงจังจนประสบความสำเร็จ
          แล้วนำไปถ่ายทอดให้กับหน่วยงานองค์กรปกครองส่วนท้องถิ่นนำไปใช้ให้เกิดประโยชน์เพื่อลดปัญหาขยะ
          </p>
          <p className="read-more">
            <Link to="#">Read More</Link>
          </p>
        </div>
      </div>

      {/* <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)',
            }}
          ></div>
          <ul className="details">
            <li className="author">
              <Link to="#">Jane Doe</Link>
            </li>
            <li className="date">July. 15, 2015</li>
            <li className="tags">
              <ul>
                <li>
                  <Link to="#">Learn</Link>
                </li>
                <li>
                  <Link to="#">Code</Link>
                </li>
                <li>
                  <Link to="#">JavaScript</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <Link to="#">Read More</Link>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Post2;
