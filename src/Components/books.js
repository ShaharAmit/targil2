import React, {Component} from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'
import MdSave from 'react-icons/lib/md/save'
import './includes/books.css';


class book extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.children)
    this.state = {
      editing:false
    }
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderUI   = this.renderUI.bind(this);
  }
  edit () {
    this.setState({
      editing:true
    });
  }
  delete() {
    this.props.onChange('delete',this.props.index);
  }
  save(e) {
    e.preventDefault();
    if(this.borrower.value === '') {
      this.return_date =  ''
    } else {                
      const date = new Date();
      date.setDate(date.getDate() + 7);
      this.return_date = date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear();
    }
    console.log(this.borrower.value,this.return_date)

    this.props.onChange('update',this.props.index,this.borrower.value,this.return_date);
    this.setState({
      editing:false
    })
  }

  renderForm() {
    return (
       <div>
        <form onSubmit={this.save}>
          <p>edit borrower</p>
          <textarea ref={
            (input) => {
              this.borrower = input;
            }
          }/>
          <button><MdSave onClick={this.save}/></button>
        </form>
      </div>
    )
  }

  renderUI() {
    return (
      <div className='books'>
          {this.props.children}
          <div className='buttonsCont'>
            <button className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}><MdEdit/></button>
            <button className="btn btn-primary" onClick={this.delete}><MdDelete/></button>
          </div>
        </div>
    );
  }


  render() {
      return (
        this.state.editing ? this.renderForm() : this.renderUI()
      )
  }
}
export default book