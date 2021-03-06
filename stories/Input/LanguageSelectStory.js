import React from 'react';
import LanguageSelect from '../../src/Input/LanguageSelect';

const DropdownStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Dropdown
      </h1>
      <p>
        <code>
          {'import { Dropdown } from \'glints-aries\''}
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
          <td style={{ width: 400, padding: 20 }}>
            <LanguageSelect
              center
              color="black"
              hoverColor="white"
              defaultItem={
                {
                  label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
                }
              }
              languageItem={[
                {
                  label: 'English', title: 'EN', value: 'english', countryIcon: 'gb',
                },
                {
                  label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
                },
              ]}
            />
          </td>
          <td>
            <pre>
              {`<LanguageSelect
    center={true}     
    onChange={...function}
    hoverColor="#0171A4"    
    color="black"
    defaultItem={
        {
            label: 'Indonesian', 
            title: 'ID', 
            value: 'indonesian', 
            countryIcon: 'id',
        }
    }
    languageItem={[
        {
            label: 'English', 
            title: 'EN', 
            value: 'english', 
            countryIcon: 'gb',
        },
        {
            label: 'Indonesian', 
            title: 'ID', 
            value: 'indonesian', 
            countryIcon: 'id',
        },
    ]}
/>`}
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
          defaultItem
          </td>
          <td>
            object
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            To show default data
          </td>
        </tr>
        <tr>
          <td>
          languageItem
          </td>
          <td>
            array
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            List of item to be display in selection
          </td>
        </tr>
        <tr>
          <td>
          center
          </td>
          <td>
            boolean
          </td>
          <td>
            <pre>
              true | false
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Set container for items into center
          </td>
        </tr>
        <tr>
          <td>
          hoverColor
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
            hex-value | rba-value | string-value
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Set hover background color
          </td>
        </tr>
        <tr>
          <td>
          color
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
            hex-value | rba-value | string-value
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Set color
          </td>
        </tr>
        <tr>
          <td>
          backGroundColor
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
            hex-value | rba-value | string-value
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Set background color
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DropdownStory;
