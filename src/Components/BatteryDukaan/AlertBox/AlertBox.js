import React from 'react'
import styles from "./AlertBox.scss"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CreateCategory,GetCategory } from '../../../Store/Actions';

function AlertBox(props) {

  console.log(props.success);
  useEffect(() => {
    props.CreateCategory();
  }, []);
   
  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const MapStateToProps=(state)=>({
  success : state.CreateCategory
})

const mapDispatchToProps = {
  CreateCategory: CreateCategory,
};

export default connect(MapStateToProps, mapDispatchToProps)(AlertBox);