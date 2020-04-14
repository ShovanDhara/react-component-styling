import React from 'react';
import {styles} from "./styles";


export const StyleObjectComponent = props => (
    <div style={styles.TodoComponent}>
        <h2 style={styles.Header}>Component using styled object</h2>
        <div>
          <p style = {styles.ErrorMessage}>Error Data</p>
        </div>
      </div>
);
