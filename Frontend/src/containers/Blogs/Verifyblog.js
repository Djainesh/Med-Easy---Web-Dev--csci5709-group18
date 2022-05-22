/**
 * Author: Jainesh Ketan Desai [B00885171]
 * Mail: Jainesh@dal.ca
 * The below code is for the admin side for the verification of the blog that posted by the user from this page admin either accpect or reject the blog posted by user and only if the admin approves the blog poted by the user then only it will be display at the user end for reading purpose. 
 */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, Table, Rating, Icon } from "semantic-ui-react";
import Layout from "../../components/Adminlayout/Layout";
import "../Blogs/Css/Form.css";
import { toast } from "react-toastify";
import PageTitle from '../../components/PageTitle/PageTitle';
const Verifyblog = () => {
  const [data, setData] = useState([]);


/**
 * Below useEffect is used to populate the table for the admin side
 */
  useEffect(() => {
    axios
      .get("/fromdata")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /**
   * Below updateStatus is used for updating status of the blog which is changed by clicking button after which status is changed accordingly.Intially status is 0 and when approved the status is changed 1 and if rejected then status will be changed to -1
   * 
   */
  const updateStatus = (data) => {
    axios
      .post("/updateForm", data)
      .then((response) => {
        setData((old) => {
          return old.map((item) => {
            if (item._id === response.data._id) {
              return response.data;
            }
            return item;
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <PageTitle title="Verify Blogs" />
      <div className="formfordisplay">
        <Table celled selectable color="green">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Sr.no</Table.HeaderCell>

              <Table.HeaderCell>Topic</Table.HeaderCell>
              <Table.HeaderCell>Content</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((item, index) => {
              return (
                <Table.Row index={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item.Topic}</Table.Cell>
                  <Table.Cell>{item.Content}</Table.Cell>
                  <Table.Cell>
                    {item.Status === 0
                      ? "Pending"
                      : item.Status === 1
                      ? "Approved"
                      : "Rejected"}
                  </Table.Cell>
                  <Table.Cell className="action-call">
                    <Icon
                      bordered
                      inverted
                      color="green"
                      name="check"
                      onClick={() => {
                        updateStatus({ ...item, Status: 1 });
                      }}
                    />
                    <Icon
                      bordered
                      inverted
                      color="red"
                      name="close"
                      onClick={() => {
                        updateStatus({ ...item, Status: -1 });
                      }}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <br></br>
      </div>
    </Layout>
  );
  
};

export default Verifyblog;
