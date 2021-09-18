import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: transparent;
`;

export const TopSection = styled.section`
    width: 60%;
    height: 30vh;
    display: flex;
    align-items: center;
    background: transparent;
    justify-content: space-evenly;
    
    .greetings {
    	height: 100%;
    	display: flex;
    	width: fit-content;
    	align-items: center;
        flex-direction: column;
        background: transparent;
        justify-content: center;

    	h1, h3 {
    		color: #13070c;
    		font-family: 'Ubuntu', sans-serif;
    	}

        h1 {
            font-size: 30px;
            font-weight: 900;
        }
    }

    img {
        z-index: 2;
	    width: auto;
	    height: 120%;
    }
`;

export const BottomSection = styled.section`
    width: 95%;
    height: 100%;
    padding: 25px;
    display: flex;
    grid-gap: 20px;
    position: relative;
    background: #DDC8C4;
    flex-direction: row;
    border-radius: 30px 30px 0 0;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,.1);

    div {
        height: fit-content;
        background: transparent;

        h2 {
            font-weight: 900;
            margin: 0 0 15px 0;
            font-family: 'Raleway', sans-serif;
        }

        .tableTask {
            width: 500px;
            display: flex;
            grid-gap: 8px;
            flex-direction: column;
            background: transparent;
        }

        &.statistics {
            width: 100%;
            height: 100%;
            background: transparent;
        }
    }
`;

export const TableRecentTasks = styled.div`
	width: 100%;
	display: flex;
    max-width: 500px;
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

export const TableStatistics = styled.div`
	width: 100%;
	display: flex;
	grid-gap: 10px;
    padding: 0 5px;
	align-items: center;
    flex-direction: column;

	.item {
		width: 100%;
		display: flex;
		padding: 15px 20px;
		background: #EFF9F0;
        border-radius: 10px;
		justify-content: space-between;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.2);

		h5, p {
			font-size: 15px;	
		}

        h5 {
            font-weight: bold;
        }
	}

	.graph {
		width: 100%;
		margin: 20px 0 0;
		padding: 20px 20px;
		background: #EFF9F0;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.2);

    	div {
        	width: 100%;
        	display: flex;
        	align-items: center;

        	&:nth-child(1) {
        		margin: 0 0 10px 0;
        		justify-content: space-between;

        		h5 {
        			font-size: 15px;
        			font-weight: bold;

        			&:nth-child(2) {
        				font-weight: 500;
        			}
        		}
        	}

        	&:nth-child(2) {
        		background: #DDC8C4;
        		border-radius: 15px;
        		height: 10px;

        		span {
        			width: 15%;
        			height: 100%;
        			display: block;
        			position: relative;
        			border-radius: 15px;
        			background: #6B4D57;
        		}
        	}
        }
    }
`;