import styled from 'styled-components';

export const ContainerCard = styled.div`
	width: 100%;
	background-color: #8bcf21;
	padding: 2rem;
	border: solid 1px #97ce4c;

	.container-card{
		&__image{
			width: 100%;
			height: 24.3rem;
			overflow: hidden;

			img{
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}

		&__info{
			margin-top: 1.6rem;

			h3{
				font-size: 1.8rem;
				margin-bottom: .8rem;
				color: #fff;
			}

			ul{
				list-style: none;
				display: flex;

				li{
					display: block;
					font-size: 1.4rem;
					color: #fff;

					&:last-child:before{
						content: "";
						width: 4px;
						height: 4px;
						display: inline-block;
						vertical-align: middle;
						position: static;
						background-color: #ffffff44;
						border-radius: 50%;
						margin: 0 8px;
					}
				}
			}
		}
	}
`;
