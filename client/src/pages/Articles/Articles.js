import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import Saved from "../../components/Saved";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Media, MediaLeft, MediaBody } from "../../components/Media";
import { Panel, PanelTitle, PanelBody } from "../../components/Panel";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
	state = {
		articles: [],
		savedArticles: [],
		search: "",
		records: 10,
		startYear: "", 
		endYear: ""
	};

	componentDidMount() {
		this.loadSavedArticles();
	}

	deleteArticle = id => {
		API.deleteArticle(id)
		.then(res => this.loadSavedArticles())
		.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	loadSavedArticles = () => {
		API.getSavedArticles().then(res => {
			this.setState({ savedArticles: res.data })
		}).catch(err => console.log(err));
	}

	handleArticleSave = (articleInfo) => {
	  API.saveArticle({
		headline: {
			main: articleInfo.headline.main
		},
		web_url: articleInfo.web_url,
		pub_date: articleInfo.pub_date,
		multimedia: articleInfo.multimedia,
  		snippet: articleInfo.snippet
	  })
		.then(res => {
			this.loadSavedArticles();
		})
		.catch(err => console.log(err));
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		API.getArticles({
			search: this.state.search, 
			records: this.state.records,
			startYear: this.state.startYear,
			endYear: this.state.endYear
		})
		.then(res => {
			this.setState({articles: res, search: "", records: 10, startYear: "", endYear: ""})
		})
		.catch(err => console.log(err));
	};

	render() {
		return (
			<Container>
				<Row>
					<Col size="md-12">
						<Panel>
							<PanelTitle>
								<h3 className = 'panel-title'>Search Query</h3>
							</PanelTitle>
							<PanelBody>
								<form>
									<Input
									value={this.state.search}
									onChange={this.handleInputChange}
									name="search"
									placeholder="Search Term (required)"
									/>
									<Input
									value={this.state.startYear}
									onChange={this.handleInputChange}
									name="startYear"
									placeholder="Start Year (optional)"
									/>
									<Input
									value={this.state.endYear}
									onChange={this.handleInputChange}
									name="endYear"
									placeholder="End Year (optional)"
									/>
									<FormBtn
									disabled={!(this.state.search)}
									onClick={this.handleFormSubmit}
									>
									Submit Search
									</FormBtn>
								</form>
							</PanelBody>
						</Panel>
		  			</Col>
		  
		  			<Col size="md-12 sm-12">
						<Panel>
							<PanelTitle>
								<h3 className = "panel-title">Articles</h3>
							</PanelTitle>
							<PanelBody>
								{this.state.articles.length ? (
									<List>
										{this.state.articles.map(article => (
											<ListItem key={article._id}>
												<Media>
													<MediaLeft article = {article} />
													<MediaBody article = {article} />
												</Media>
												<SaveBtn onClick={() => this.handleArticleSave(article)} />
											</ListItem>
										))}
									</List>
								) : (
									<h3>No Results to Display</h3>
								)}
							</PanelBody>
						</Panel>	
		  			</Col>

					<Col size="md-12 sm-12">
						<Panel>
							<PanelTitle>
								<h3 className = "panel-title">Bookmarked Articles</h3>
							</PanelTitle>
							<PanelBody>
								<Saved>
									{this.state.savedArticles.length ? (
										<List>
											{this.state.savedArticles.map(article => (
												<ListItem key={article._id}>
													<Media>
														<MediaLeft article = {article} />
														<MediaBody article = {article} />
													</Media>
													<DeleteBtn onClick={() => this.deleteArticle(article._id)} />
												</ListItem>
											))}
										</List>
									) : (
										<h3>No Results to Display</h3>
									)}
								</Saved>
							</PanelBody>
						</Panel>
					</Col>
				</Row>
	  		</Container>
		);
	}
}

export default Articles;
