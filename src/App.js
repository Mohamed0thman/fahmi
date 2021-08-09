import { useRef, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./component/header/header.component";
import Footer from "./component/footer/footer.component";

import HomePage from "./page/home-page/home-page.component";
import processPage from "./page/Process-page/Process-page.component";

import "./App.css";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState();
  const headerRef = useRef(null);
  const home = useRef(null);
  const aboutMe = useRef(null);
  const services = useRef(null);

  // function handleToAboutMe() {
  //   aboutMe.current.scrollIntoView({ behavior: "smooth" });
  // }
  // function handleToservies() {
  //   services.current.scrollIntoView({ behavior: "smooth" });
  // }

  const sectionRefs = [
    { section: "Home", ref: home },
    { section: "About Me", ref: aboutMe },
    { section: "Services", ref: services },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return ele;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <div className="App">
      <Header
        scrollTo={scrollTo}
        headerRef={headerRef}
        home={home}
        aboutMe={aboutMe}
        services={services}
        visibleSection={visibleSection}
      />
      <Switch>
        <Route
          exact
          path="/fahmi"
          render={() => (
            <HomePage
              scrollTo={scrollTo}
              home={home}
              aboutMe={aboutMe}
              services={services}
            />
          )}
        />
        <Route exact path="/my-process" component={processPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
