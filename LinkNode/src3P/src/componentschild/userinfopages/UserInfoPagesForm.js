

import React from "react";
import { withStyles } from "@material-ui/core";

import PermIdentity from "@material-ui/icons/PermIdentity";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Clearfix from "../../components/Clearfix/Clearfix.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";

import MuiltiSelectPosition from './MultiSelectPosition'
import MuiltiSelectKnowledge from './MultiSelectKnowledge'


const grayColor = [
  "#999",
  "#777",
  "#3C4858",
  "#AAAAAA",
  "#D2D2D2",
  "#DDD",
  "#555555",
  "#333",
  "#eee",
  "#ccc",
  "#e4e4e4",
  "#E5E5E5",
  "#f9f9f9",
  "#f5f5f5",
  "#495057",
  "#e7e7e7",
  "#212121",
  "#c8c8c8",
  "#505050"
];
const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1"
  }
};
const cardTitle = {
  ...title,
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": {
    ...title,
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  }
};
class UserInfoPagesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes, userInfo } = this.props
    return (
      <React.Fragment>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <PermIdentity />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Chỉnh sửa thông tin
              </h4>
            </CardHeader>

            <CardBody>

              {userInfo.map((userInfoItem, userInfoIndex) => {
                return (
                  <GridContainer key={userInfoItem.code}>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Họ tên"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: true
                        }}

                        value={userInfoItem.name}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Mã số NV"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        value={userInfoItem.code}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Ngày sinh"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        value={userInfoItem.dob}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Vị trí - Phòng - Khoa"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        value={userInfoItem.position + " - " + userInfoItem.room + " - " + userInfoItem.faculty}
                      />
                      <MuiltiSelectPosition />
                    </GridItem>







                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Kiến thức sở hữu: Tên - Loại"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        value={userInfoItem.knowlegdeName + " - " + userInfoItem.knowledgeType}
                      />
                      <MuiltiSelectKnowledge/>

                    </GridItem>




                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Ghi chú cho người duyệt"
                        id="about-me"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 3
                        }}
                      />
                    </GridItem>

                  </GridContainer>


                )
              })}
              <Button color="rose" className={classes.updateProfileButton}>Cập nhật thông tin / Chờ duyệt</Button>
              <Clearfix />
            </CardBody>

          </Card>
        </GridItem>
      </React.Fragment >
    );
  }
}

const useStyles =
{
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    "& small": {
      fontSize: "80%",
      fontWeight: "400"
    }
  },
  cardCategory: {
    marginTop: "10px",
    color: grayColor[0] + " !important",
    textAlign: "center"
  },
  description: {
    color: grayColor[0]
  },
  updateProfileButton: {
    float: "right"
  }
}
export default withStyles(useStyles)(UserInfoPagesForm);