

import React from "react";
import { withStyles, TextField } from "@material-ui/core";
import ShouldUpdateWrapper from 'BaseComponent/ShouldUpdateWrapper';

import BaseConsumer from 'BaseComponent/BaseConsumer';

import GridContainer from "../../../i3Src/components/Grid/GridContainer";
import GridItem from "../../../i3Src/components/Grid/GridItem";
import Button from "../../../i3Src/components/CustomButtons/Button";
import Clearfix from "../../../i3Src/components/Clearfix/Clearfix";
import Card from "../../../i3Src/components/Card/Card";
import CardBody from "../../../i3Src/components/Card/CardBody";
// import MuiltiSelectPosition from './MultiSelectPosition'
// import MuiltiSelectKnowledge from './MultiSelectKnowledge'
import Avatar from "../../react-components/general/Avatar";

class ProfileInfo extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const { classes, data } = this.props
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            {data.userInfo.map((userInfoItem, userInfoIndex) => {
              return (
                <GridContainer key={userInfoItem.code} >

                  <GridItem xs={12} sm={12} md={4} style={{    justifyContent: "center", display: "flex"}}>
                        <Avatar
                          src="/dist/Contents/img/doctor.jpg"
                          width="70px"
                        />

                  </GridItem>

                  <GridItem xs={12} sm={12} md={4} className={classes.gridItem}>
                    
                    <TextField
                      id="Họ tên"
                      label="Họ tên"
                      fullWidth
                     
                    />

                   
                    
                  </GridItem>


                  <GridItem xs={12} sm={12} md={4} className={classes.gridItem}>
                 
                    <TextField
                      id="Mã số NV"
                      label="Mã số NV"
                      fullWidth
                      

                    />
                   
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4} className={classes.gridItem}>
                    <TextField
                      id="Ngày sinh"
                      label="Ngày sinh"
                      fullWidth
                      value={userInfoItem.dob}

                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4} className={classes.gridItem}>
                    <TextField
                      id="Vị trí - Phòng - Khoa"
                      label="Vị trí - Phòng - Khoa"
                      fullWidth
                      value={userInfoItem.position + " - " + userInfoItem.room + " - " + userInfoItem.faculty}
                    />
                  </GridItem>


                  {/* <MuiltiSelectPosition /> */}

                  <GridItem xs={12} sm={12} md={4} className={classes.gridItem}>
                    <TextField
                      id="Kiến thức sở hữu: Tên - Loại"
                      label="Kiến thức sở hữu: Tên - Loại"
                      fullWidth
                      value={userInfoItem.knowlegdeName + " - " + userInfoItem.knowledgeType}
                    />
                  </GridItem>


                  {/* <MuiltiSelectKnowledge/> */}


                  <GridItem xs={12} sm={12} md={4} className={classes.gridItem}>
                    <TextField
                      id="Ghi chú cho người duyệt"
                      label="Ghi chú "
                      fullWidth
                      rows={3}
                    />
                  </GridItem>
                </GridContainer>
              )
            })}
            <div className={classes.updateProfileButton}>
              <Button color="primary" >Cập nhật thông tin / Chờ duyệt</Button>
            </div>
            <Clearfix />
          </CardBody>

        </Card>
      </React.Fragment >
    );
  }
}

const useStyles =
{
  updateProfileButton: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px"
  },
  gridItem: {
    margin: "15px 0px",
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom:""
  },
  user: {
    textAlign: 'center',
    padding: '1rem',
    fontWeight: '500',
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '2%',

    //borderBottom: '1px solid ' + Colors.border,
  },

}
export default withStyles(useStyles)(ProfileInfo);