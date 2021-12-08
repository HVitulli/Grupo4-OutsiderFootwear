import styled from 'styled-components'

export const Container = styled.div`
    color: red;
    font-weight: 600;
`;
export const AccountSettingsContainer = styled.div`
    display: flex;
    justify-content: top;
    flex-direction: column;
    text-align: center;

    margin: 50px 0 50px 0;
    padding-bottom: 50px;

    width: 335px;
    // height: 650px;

    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 8px;

    a {
        color: #494848;
        padding-top: 70px;
        padding-left: 50px;
        text-align: left;
        text-decoration: none;
    }

    hr {
        margin: 70px 30px 30px 30px;
        // border-color: #B1B1B1;
        border: 1px solid #B1B1B1;
    }
`;
