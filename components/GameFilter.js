import React, { useState } from "react";
import styles from "../styles/Games.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const GameFilter = (props) => {
  const [customBg, setCustomBg] = useState(styles.custom_Menu);
  const [sBg, setSbg] = useState("");
  const [sBg1, setSbg1] = useState("");
  const [sBg2, setSbg2] = useState("");
  const [customBg1, setCustomBg1] = useState(styles.custom_Menu);
  const [customBg2, setCustomBg2] = useState(styles.custom_Menu);
  const [dVisible, setDVisible] = useState(false);
  const [selected, setSelected] = useState("Top free");
 
  const [itemList, setItemList] = useState([
    {
      name: "Best-rated",
      value: "best",
    },
    {
      name: "Trending",
      value: "trending",
    },
    {
      name: "Specials",
      value: "selling",
    },
    {
      name: "Most popular",
      value: "popular",
    },
    {
      name: "Top free",
      value: "free",
    },
  ]);
  const [dVisible1, setDVisible1] = useState(false);
  const [selected1, setSelected1] = useState("Games");
  const [itemList1, setItemList1] = useState([
    {
      name: "Apps",
      value: "apps",
    },
    {
      name: "Games",
      value: "games",
    },
  ]);
  const [dVisible2, setDVisible2] = useState(false);
  const [selected2, setSelected2] = useState("All categories");
  const [itemList2, setItemList2] = useState([
    {
      name: "Action & adventure",
      value: "action",
    },
    {
      name: "Classics",
      value: "classic",
    },
    {
      name: "Fighting",
      value: "fighting",
    },
    {
      name: "Racing & flying",
      value: "racing",
    },
    {
      name: "Shooter",
      value: "shooter",
    },
    {
      name: "All categories",
      value: "categories",
    },
  ]);
   // resetBtn function..
   const [opacity, setOpacity] = useState(styles.opEdit);
   const [reset, setReset] = useState("Top free");
   const [reset1, setReset1] = useState("Games");
   const [reset2, setReset2] = useState("All categories");
   const [disbable, setDisable] = useState(true);
   const resetBtn=()=>{
    props.filterGames2(props.AllGamesApi);
    setSelected(reset);
    setSelected1(reset1);
    setSelected2(reset2);
    setDisable(true);
    setOpacity(styles.opEdit);
  }

  //

  return (
    <>
      <div className={styles.selectMain}>
        <div className={styles.custom_dropdown}>
          <div className={customBg}>
            <div
              className={`${styles.custom_dropdown_selection} ${sBg}`}
              onClick={(e) => {
                setDVisible(!dVisible);
                setDVisible1(false);
                setDVisible2(false);
                setSbg(sBg === "" ? styles.cBg : "");
                setSbg2("");
                setSbg1("");
                setCustomBg(
                  customBg === styles.custom_Menu
                    ? styles.custom_Menu1
                    : styles.custom_Menu
                );
                setCustomBg2(styles.custom_Menu);
                setCustomBg1(styles.custom_Menu);
              }}
            >
              <span>
                {selected !== "Top free" ? itemList[selected].name : "Top free"}
              </span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            {dVisible ? (
              <div className={styles.item_Holder}>
                {itemList.map((item, index) => {
                  return (
                    
                      <div
                        className={styles.drop_item}
                        key={index}
                        onClick={(e) => {
                          setSelected(index);
                          setDVisible(false);
                          if (item.name=== "Trending") {
                            props.filterGames("trending");
                          }
                          if(item.name!=="Top free" && item.name!=="Games" && item.name!=="All categories"){
                            setDisable(false);
                            setOpacity(styles.opNor);
                          }else{
                            setDisable(true);
                            setOpacity(styles.opEdit);
                          }
                          if (item.name=== "Most popular") {
                            props.filterGames("popular");
                          }
                          if (item.name=== "Best-rated") {
                            props.filterGames("best-rated");
                          }
                          if (item.name=== "Specials") {
                            props.filterGames("special");
                          }
                          if (item.name=== "Top free") {
                            props.filterGames2(props.AllGamesApi);
                          }
                          setCustomBg(
                            customBg === styles.custom_Menu1
                              ? styles.custom_Menu
                              : styles.custom_Menu1
                          );
                          setSbg("");
                        }}
                      >
                        <span> {item.name}</span>
                      </div>
                    
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className={`${customBg1} ${styles.sPadding}`}>
            <div
              className={`${styles.custom_dropdown_selection} ${sBg1}`}
              onClick={(e) => {
                setDVisible1(!dVisible1);
                setDVisible(false);
                setDVisible2(false);
                setCustomBg1(
                  customBg1 === styles.custom_Menu
                    ? styles.custom_Menu1
                    : styles.custom_Menu
                );
                setSbg1(sBg1 === "" ? styles.cBg : "");
                setSbg("");
                setSbg2("");
                setCustomBg(styles.custom_Menu);
                setCustomBg2(styles.custom_Menu);
              }}
            >
              <span>
                {selected1 !== "Games" ? itemList1[selected1].name : "Games"}
              </span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            {dVisible1 ? (
              <div className={styles.item_Holder}>
                {itemList1.map((item, index) => {
                  return (
                    
                      <div
                        className={styles.drop_item}
                        key={index}
                        onClick={(e) => {
                          setSelected1(index);
                          setDVisible1(false);
                          setCustomBg1(
                            customBg1 === styles.custom_Menu1
                              ? styles.custom_Menu
                              : styles.custom_Menu1
                          );
                          setSbg1("");
                          if(item.name!=="Top free" && item.name!=="Games" && item.name!=="All categories"){
                            setDisable(false);
                            setOpacity(styles.opNor);
                          }else{
                            setDisable(true);
                            setOpacity(styles.opEdit);
                          }
                          if (item.name=== "Apps") {
                            props.displayBlock();
                            setSelected1(reset1);
                          }
                          
                         
                        }}
                      >
                        <span> {item.name}</span>
                      </div>
                    
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className={customBg2}>
            <div
              className={`${styles.custom_dropdown_selection} ${sBg2}`}
              onClick={(e) => {
                setDVisible2(!dVisible2);
                setDVisible1(false);
                setDVisible(false);
                setCustomBg2(
                  customBg2 === styles.custom_Menu
                    ? styles.custom_Menu1
                    : styles.custom_Menu
                );
                setSbg2(sBg2 === "" ? styles.cBg : "");
                setSbg("");
                setSbg1("");
                setCustomBg(styles.custom_Menu);
                setCustomBg1(styles.custom_Menu);
              }}
            >
              <span>
                {selected2 !== "All categories"
                  ? itemList2[selected2].name
                  : "All categories"}
              </span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            {dVisible2 ? (
              <div className={styles.item_Holder}>
                {itemList2.map((item, index) => {
                  return (
                  
                      <div
                        className={styles.drop_item}
                        key={index}
                        onClick={(e) => {
                          setSelected2(index);
                          setDVisible2(false);
                          setCustomBg2(
                            customBg2 === styles.custom_Menu1
                              ? styles.custom_Menu
                              : styles.custom_Menu1
                          );
                          if (item.name=== "Action & adventure") {
                            props.filterGamesCat("action");
                          }
                          if (item.name=== "Classics") {
                            props.filterGamesCat("classic");
                          }
                          if (item.name=== "Fighting") {
                            props.filterGamesCat("fighting");
                          }
                          if (item.name=== "Racing & flying") {
                            props.filterGamesCat("racing");
                          }
                          if (item.name=== "Shooter") {
                            props.filterGamesCat("shooter");
                          }
                          if(item.name!=="Top free" && item.name!=="Games" && item.name!=="All categories"){
                            setDisable(false);
                            setOpacity(styles.opNor);
                          }else{
                            setDisable(true);
                            setOpacity(styles.opEdit);
                          }
                          if (item.name=== "All categories") {
                            props.filterGames2(props.AllAApi);
                          }
                          setSbg2("");
                        }}
                      >
                        <span> {item.name}</span>
                      </div>
                    
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button disabled={disbable} className={`${styles.resetBtn} ${opacity}`} onClick={resetBtn}>Reset all</button>
      </div>
    </>
  );
};

export default GameFilter;
