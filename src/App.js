import logo from "./Assets/logo.svg";
import Image1 from "./Assets/Image1.png";
import Image2 from "./Assets/Image2.png";
import Image3 from "./Assets/Image3.png";
import "./App.css";
import SectionView from "./SectionView";

function App() {
  const list = [
    {
      title: "التوثيق 3",
      img: Image2,
      soon: false,
    },
    {
      title: "التوثيق 2",
      img: Image2,
      soon: false,
    },

    {
      title: "التوثيق 1",
      img: Image1,
      soon: false,
    },
  ];
  const list2 = [
    {
      title: "مشروع 3",
      img: Image2,
      soon: false,
    },
    {
      title: "مشروع 2",
      img: Image2,
      soon: false,
    },
    {
      title: "مشروع 1",
      img: Image1,
      soon: false,
    },
    {
      title: "مشروع 4",
      img: Image3,
      soon: true,
    },
    {
      title: "مشروع 5",
      img: Image3,
      soon: true,
    },
  ];
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#122A47",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "300vh",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            marginTop: window.innerHeight * 0.4,
          }}
        >
          <img src={logo} alt="logo" />
          <b
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 70,
              marginTop: 50,
              fontFamily: "serif",
            }}
          >
            التوثيق الموحد
          </b>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 23,
              marginTop: 10,
              fontFamily: "serif",
              opacity: 0.7,
            }}
          >
            لمشاريع إدارة التطوير والبرمجيات
          </p>
        </div>

        <div
          style={{
            justifySelf: "flex-end",
            alignSelf: "flex-end",
            alignContent: "flex-end",
            marginLeft: window.innerWidth * 0.1,
            marginTop: window.innerHeight * 0.1,
          }}
        >
          <SectionView List={list} title={"التوثيق"} />
        </div>
        <div
          style={{
            justifySelf: "flex-end",
            alignSelf: "flex-end",
            marginLeft: window.innerWidth * 0.1,
            marginTop: window.innerHeight * 0.05,
          }}
        >
          <SectionView List={list2} title={"مشاريعنا"} />
        </div>
      </div>
      <div style={{ marginTop: 20, marginBottom: 50 }}>
        <b style={{ color: "white", fontSize: 15 }}>جميع الحقوق محفوظة</b>
      </div>
    </div>
  );
}

export default App;
