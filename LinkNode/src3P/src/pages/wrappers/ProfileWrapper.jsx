import React from 'react';
import BaseRouteWrapper from 'BaseComponent/BaseRouteWrapper';
import ProfilePage from '../sub-pages/ProfilePage';

export default class ProfileWrapper extends BaseRouteWrapper {

    componentDidMount() {
        const x = {
            searchModel: {
                pagingData: {
                    pageSize: 15,
                    pageIndex: 1,
                },
                filter: {
                    date: null,
                }
            },
            userInfo: [
                { name: "Nguyen Van A ", code: 100, dob: "1/1/1996", position: "Bác sĩ", room: "Phẫu thuật", faculty: "Tim mạch", knowlegdeName: "Toeic 725", knowledgeType: "Bằng cấp" }
            ]
        }
        this.setData(x);
    }
    wrapperContent() {
        const data = this.getData();
        return <ProfilePage data={data} />
    }
}