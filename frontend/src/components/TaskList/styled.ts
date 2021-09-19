import styled from 'styled-components';

export const MainComponent = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: transparent;
`;

export const ListContainer = styled.section`
    width: 95%;
    height: 100%;
    display: flex;
    grid-gap: 15px;
    background: #DDC8C4;
    flex-direction: column;
    padding: 30px 25px 25px;
    border-radius: 30px 30px 0 0;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .1);
`;

export const HeaderTable = styled.div`
    width: 100%;
    display: flex;
    height: fit-content;
    align-items: center;
    background: transparent;
    justify-content: space-between;

    h2 {
        font-weight: 900;
        font-family: 'Raleway', sans-serif;
    }

    div {
        display: flex;
        grid-gap: 10px;
        
        button {
            outline: none;
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
            padding: 10px 20px;
            position: relative;
            border: transparent;
            background: transparent;

            &::after {
                width: 0;
                height: 2px;
                content: '';
                display: block;
                position: absolute;
                background: #13070C;
                transition: .5s ease-in-out;
            }

            &.selected,
            &:hover {
                &::after {
                    width: 80%;
                }
            }
        }
    }
`;

export const ItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    grid-gap: 20px;
    flex-direction: column;
    background: transparent;
`;

export const ItemRow = styled.div`
    width: 100%;
	display: flex;
    padding: 10px 20px;
	flex-direction: row;
	height: fit-content;
	align-items: center;
    border-radius: 10px;
	justify-content: space-evenly;
    background: #EFF9F0 !important;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,.2);

	img {
        width: 30px;
		height: 30px;
		border-radius: 10px;
    	box-shadow: 0px 0px 5px 0px rgba(0,0,0,.2);
	}

    h4 {
		font-size: 15px;
	}

	h5 {
		font-size: 15px;
		padding: 5px 8px;
		border-radius: 15px;

		&.FINALIZADO {
			background: rgba(66, 245, 138, .4);
		}

		&.PENDENTE {
			background: rgba(245, 66, 66, .4);
		}
	}

	button {
        border: none;
        outline: none;
        color: #EFF9F0;
		line-height: 0;
        cursor: pointer;
		font-size: 15px;
        border-radius: 5px;
		padding: 15px 20px;
		background: #13070c;
        transition: .5s linear;

        &:hover {
            background: #6B4D57;
        }
	}
`;

export const PaginationSelector = styled.div`
    grid-gap: 5%;
    width: 200px;
    height: 30px;
    display: grid;
    margin: 0 auto;
    background: transparent;
    grid-template-columns: repeat(3, 1fr);

    span,
    button {
        outline: none;
        display: grid;
        line-height: 0;
        font-size: 20px;
        font-weight: 600;
        background: #EFF9F0;
        border-radius: 10px;
        border: transparent;
        place-items: center;
        transition: .5s ease;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.2);

    }
    
    button {
        cursor: pointer;

        &:hover,
        &.disable {
            background: #dee3df;
        }
    }
`;