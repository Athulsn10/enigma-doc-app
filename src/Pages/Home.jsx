import React, { useState, useEffect } from "react";
import "./Home.css";
import { Modal, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import Avatar from "@mui/joy/Avatar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {collection,getDocs, addDoc, doc,deleteDoc,updateDoc} from "firebase/firestore";
import { db } from "../firebasesdk.js";
import Snackbar from '@mui/material/Snackbar';


function Home() {

  const [open, setOpen] = useState(false);
  const [newEnigma, setNewEnigma] = useState("");
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editedContent, setEditedContent] = useState("");


  const handleClose = () => {
    setShow(false);
    setOpen(false);
    setEditMode(false);
    setSelectedPost(null);
    setEditedContent("");
    setNewEnigma("")
  };
  const handleShow = () => setShow(true);
  const [posts, setPosts] = useState([]);
  const postCollection = collection(db, "post");

  const handleQuillChange = (content) => {
    setNewEnigma(content);
  };

    const getPosts = async () => {
    const post = await getDocs(collection(db, "post"));
    const data = post.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    data.sort((a, b) => b.createdAt - a.createdAt);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  
  const handleClick = () => {
    setOpen(true);
  };
  
  const createPost = async () => {
    const timestamp = new Date().getTime(); 
    if (!editMode) {
      // Creating a new post
      await addDoc(postCollection, { enigma: newEnigma, createdAt: timestamp });
    } else {
      // Updating an existing post
      const postDoc = doc(db, "post", selectedPost.id);
      await updateDoc(postDoc, { enigma: editedContent, createdAt: timestamp });
    }
    handleClose();
    getPosts();
    handleClick();
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "post", id);
    await deleteDoc(postDoc);
    getPosts();
  };

  const editPost = (post) => {
    setEditMode(true);
    setSelectedPost(post);
    setEditedContent(post.enigma);
    handleShow();
  };
  const formatTimestamp = (timestamp) => {
    const formattedTimestamp = new Date(timestamp).toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  
    return formattedTimestamp;
  };

  return (
    <>
    <Snackbar
     open={open}
     onClose={() => setOpen(false)}
     message="Thought Posted"
     variant="soft"
      />
      <div className="d-flex justify-content-center pt-5">
        <div className="mt-5 d-flex pt-3">
          <Avatar variant="plain" alt="Remy Sharp" src="./user.png" />
          <button
            onClick={handleShow}
            className="btn"
            style={{ border: "none" }}
          >
            Share Your Thought Anonymously...
          </button>
        </div>
        <hr />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5 pb-5">
        <div className="my-1 post-msg">
          {posts.map((post) => (
            <div className="my-1 " as="li" key={post.id}>
              <Row xs={12} md={12} lg={12}>
                <Col xs={2} md={3} lg={1} className="d-flex my-0">
                  <Avatar variant="plain" alt="Remy Sharp" src="./user.png" />
                </Col>
                <Col>
                  <Row>
                    <Col className="d-flex align-items-center">
                      <h6 className="me-5 txt fw-bold m-0 -b-1">
                        Anonymous User
                      </h6>
                    </Col>
                    <p style={{fontSize:'10px',opacity:'0.5'}}>{formatTimestamp(post.createdAt)}</p>
                  </Row>
                  <p
                    className="txt"
                    dangerouslySetInnerHTML={{ __html: post.enigma }}
                  ></p>
                </Col>
              </Row>
              <div className="d-flex align-items-center me-2 ms-5 ps-3">
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                  className="btn m-0 p-0 me-3"
                  style={{ border: "none" }}
                >
                  <i
                    className=" fs-5 fa-solid fa-xmark"
                    style={{ color: "#ff0000" }}
                  ></i>
                </button>
                <button
                  onClick={() => {
                    editPost(post);
                  }}
                  className="btn m-0 p-0 pb-1"
                  style={{ border: "none" }}
                >
                  <i className="fa-solid fa-scissors"></i>
                </button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Modal className="mdl" centered show={show} onHide={handleClose}>
        <div className="d-flex mx-3 my-3">
          <Avatar variant="plain" alt="Remy Sharp" src="./user.png" />
          <p className="ms-2">Anonymous User</p>
        </div>
        {/* react-quill */}
        <div className="mx-3">
          <ReactQuill
            theme="snow"
            onChange={(content) => {
              editMode ? setEditedContent(content) : handleQuillChange(content);
            }}
            value={editMode ? editedContent : newEnigma}
          />
        </div>
        <Modal.Footer>
          <Button onClick={createPost} variant="contained">
            {editMode ? "Update" : "Post"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
