import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/action";
import JobCard from "./JobCard";
import "./JobList.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Pagination from "./Pagination";
// import Pagination from "@mui/material/Pagination";

const JobList = () => {
  // input state
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const handleSearch = (text, e) => {
    e.preventDefault();
    setSearch(text);
  };
  // select state category
  const [cat, setCat] = useState("all");
  const handleCat = (newcat) => {
    setCat(newcat);
  };

  // select state region
  const [region, setRegion] = useState("all");
  const handleregion = (newreg) => {
    setRegion(newreg);
  };
  //-------------------------------------
  const { loadingjob, jobOffers, NumOfPage } = useSelector(
    (state) => state.JobReducer
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getJobs(page));
  }, [page]);
  console.log(jobOffers);

  //state pagination (frontend)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = jobOffers?.slice(firstPostIndex, lastPostIndex);
  console.log(currentPost);

  return (
    <>
      <section className="input-section">
        <div>
          <form
            action=""
            style={{ display: "flex", justifyContent: "space-around" }}
            onSubmit={(e) => handleSearch(text, e)}
          >
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                width: "250px",
                height: "38px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                border: " gray solid 0.1px",
              }}
            />
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  marginLeft: "0px",
                  backgroundColor: "transparent",
                  border: " gray solid 0.1px",
                  color: "black",
                }}
                type="submit"
              >
                Search
              </Button>
            </Stack>
          </form>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              onChange={(e) => handleCat(e.target.value)}
            >
              <MenuItem value="all">all category</MenuItem>
              <MenuItem value="mecanique">mecanic</MenuItem>
              <MenuItem value="informatique">informatic</MenuItem>
              <MenuItem value="forage">drilling</MenuItem>
              <MenuItem value="call-center">call-center</MenuItem>
              <MenuItem value="electrique">electric</MenuItem>
              <MenuItem value="medecine">medical</MenuItem>
              <MenuItem value="finance">finance</MenuItem>
              <MenuItem value="comptabilité">comptability</MenuItem>
              <MenuItem value="civile">civil</MenuItem>
              <MenuItem value="autre">other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>Region</InputLabel>
            <Select
              label="Region"
              onChange={(e) => handleregion(e.target.value)}
            >
              <MenuItem value="all">all </MenuItem>
              <MenuItem value="sfax">sfax</MenuItem>
              <MenuItem value="tunis">tunis</MenuItem>
              <MenuItem value="sousse">sousse</MenuItem>
              <MenuItem value="nabeul">nabeul</MenuItem>
              <MenuItem value="bizerte">bizerte</MenuItem>
              <MenuItem value="monastir">monastir</MenuItem>
              <MenuItem value="gabes">gabes</MenuItem>
              <MenuItem value="mahdia">mahdia</MenuItem>
              <MenuItem value="gafsa">gafsa</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>
      <section className="jobCards-section">
        {loadingjob ? (
          <> loading ..</>
        ) : (
          // jobOffers
          currentPost &&
          currentPost
            ?.filter((el) =>
              el.title
                ?.trim()
                .toUpperCase()
                .includes(search.trim().toUpperCase())
            )
            ?.filter((el) => {
              if (cat === "mecanique") {
                return el.category === "mecanique";
              } else if (cat === "informatique") {
                return el.category === "informatique";
              } else if (cat === "forage") {
                return el.category === "forage";
              } else if (cat === "call-center") {
                return el.category === "call-center";
              } else if (cat === "electrique") {
                return el.category === "electrique";
              } else if (cat === "medecine") {
                return el.category === "medecine";
              } else if (cat === "finance") {
                return el.category === "finance";
              } else if (cat === "comptabilité") {
                return el.category === "comptabilité";
              } else if (cat === "civile") {
                return el.category === "civile";
              } else if (cat === "autre") {
                return el.category === "autre";
              } else {
                return el;
              }
            })
            ?.filter((el) => {
              if (region === "sfax") {
                return el.region === "sfax";
              } else if (region === "tunis") {
                return el.region === "tunis";
              } else if (region === "sousse") {
                return el.region === "sousse";
              } else if (region === "nabeul") {
                return el.region === "nabeul";
              } else if (region === "bizerte") {
                return el.region === "bizerte";
              } else if (region === "monastir") {
                return el.region === "monastir";
              } else if (region === "gabes") {
                return el.region === "gabes";
              } else if (region === "mahdia") {
                return el.region === "mahdia";
              } else if (region === "gafsa") {
                return el.region === "gafsa";
              } else {
                return el;
              }
            })
            ?.map((el) => (
              <div className="jobCards">
                <JobCard key={el._id} el={el} />
              </div>
            ))
        )}

        {/* <div>
          <Stack spacing={2}>
            <Pagination
              page={page}
              count={NumOfPage}
              onChange={(event, value) => setPage(value)}
            />
          </Stack>
        </div> */}
      </section>
      <div>
        <Pagination
          totalPosts={jobOffers?.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <br />
      <br />
    </>
  );
};

export default JobList;
