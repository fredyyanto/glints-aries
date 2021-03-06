import React from 'react';
import Tag from '../../src/General/Tag';

import Icon from '../../src/General/Icon';

const TagStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Tag
      </h1>
      <p>
        <code>
          {'import { Tag } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
              Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <Tag label="Software Engineer">
              <Icon name="close" color="black" />
            </Tag>
          </td>
          <td>
            <pre>
              {`<Tag label="Software Engineer">
  <Icon name="close" color="black" />
</Tag>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Props
    </h1>
    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            label
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Sets the label of Badge.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TagStory;
