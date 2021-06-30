import styled from 'styled-components';
import '../index.css'
const Wrap = styled.div`
    .date-time {
            font-style: italic;
        }
    @media only screen and (min-width: 50px) {
        width: 100vw;
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${(props) => props.isDarkMode === true ? "#fff" : "#282c35"};
        transition: all .3s linear;
        .bound {
            width: 90vw;
            margin: 0 auto;
            
        }
        .title {
            font-size: 40px;
            line-height: 60px;
            font-weight: 700;
            color: ${(props) => props.isDarkMode === true ? "#282c35" : "#fff"};
            padding: 60px 0 40px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            letter-spacing: 2px;
            .btn-style {
                color: #fff;
                background-color: ${(props) => props.isDarkMode === true ? "#d23669" : "#ffa7c4"};
                padding: 7px 10px;
                letter-spacing: 2px;
                border-radius: 5px;
                border: none;
                appearance: none;
                font-weight: 700;
                text-transform: capitalize;
            }
        }
        .wrap-content {
                margin-top: 5rem ;
            .item-title {
                margin-top: 4rem;
                letter-spacing: 2px;
                color: ${(props) => props.isDarkMode === true ? "#d23669" : "#ffa7c4"};
                font-size: 28px;
                line-height: 42px;
                font-weight: 700;
            }
            .date-time, .messages {
                color: ${(props) => props.isDarkMode === true ? "#282c35" : "#fff"};
                font-style: italic;
                font-size: 14px;
                line-height: 21px;
            }
        }

        .wrap-content {
            margin-top: 5rem;
        }
    }
    @media only screen and (min-width: 650px){
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${(props) => props.isDarkMode === true ? "#fff" : "#282c35"};
        transition: all .3s linear;
        .bound {
            
            max-width: 600px;
            
        }
        .title {
            font-size: 40px;
            line-height: 60px;
            font-weight: 700;
            color: ${(props) => props.isDarkMode === true ? "#282c35" : "#fff"};
            padding: 60px 0 40px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            letter-spacing: 2px;
            .btn-style {
                color: ${(props) => props.isDarkMode === true ? "#fff" : "#282c35" };
                background-color: ${(props) => props.isDarkMode === true ? "#d23669" : "#ffa7c4"};
                padding: 7px 10px;
                letter-spacing: 2px;
                border-radius: 5px;
                
                border: none;
                appearance: none;
                font-weight: 700;
                text-transform: capitalize;
            }
        }
        .wrap-content {
            margin: 7rem 0 ;
            .item-title {
                margin-top: 4rem;
                letter-spacing: 2px;
                color: ${(props) => props.isDarkMode === true ? "#d23669" : "#ffa7c4"};
                font-size: 28px;
                line-height: 42px;
                font-weight: 700;
            }
            .date-time, .messages {
                color: ${(props) => props.isDarkMode === true ? "#282c35" : "#fff"};
                
                font-size: 14px;
                line-height: 21px;
            }
            .date-time {
                font-style: italic;
            }
        }
    }
`;
export {Wrap}