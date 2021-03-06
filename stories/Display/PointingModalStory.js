import React from 'react';
import PointingModal from '../../src/Display/PointingModal';

import ProfilePicture from '../../src/General/ProfilePicture';
import Divider from '../../src/General/Divider';

const PointingModalStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Pointing Modal
      </h1>
      <p>
        <code>
          {'import { PointingModal } from \'glints-aries\''}
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
          <td style={{ padding: 20, backgroundColor: 'lightGrey' }}>
            <PointingModal>
              <PointingModal.Header>
                <ProfilePicture editable>
                  <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="profile" />
                </ProfilePicture>
                <div className="aries-modal-profile">
                  <span>
                    Hello,
                  </span>
                  <a href="./profile">
                    Fredy Yanto
                  </a>
                </div>
              </PointingModal.Header>
              <Divider theme="grey" />
              <PointingModal.Body>
                <PointingModal.Item>
                  <a href="./profile">View Profile</a>
                </PointingModal.Item>
                <PointingModal.Item>
                  <a href="./edit-profile">Edit Profile</a>
                </PointingModal.Item>
                <PointingModal.Item>
                  <a href="./sign-out">Sign Out</a>
                </PointingModal.Item>
              </PointingModal.Body>
            </PointingModal>
          </td>
          <td>
            <pre>
              {` import { PointingModal, ProfilePicture } from 'glints-aries';

<PointingModal>
  <PointingModal.Header>
    <ProfilePicture editable assetUrl="{ url / path }" />
    <div className="aries-modal-profile">
        <span>Hello,</span>
        <a href="#">Fredy Yanto</a>
    </div>
  </PointingModal.Header>
  <Divider theme="grey" />
  <PointingModal.Body>
    <PointingModal.Item onClick={...}>
      <a href="#">View Profile</a>
    </PointingModal.Item>
  </PointingModal.Body>
  <PointingModal.Footer>
    Footer section here ...
  </PointingModal.Footer>
</PointingModal>`}
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
            onClick
          </td>
          <td>
            Function
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PointingModalStory;
