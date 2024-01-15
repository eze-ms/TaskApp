import React, { Component } from 'react';
import $ from 'jquery';
import './Chat.css';
import { BsSend } from "react-icons/bs";


class Chat extends Component {
  componentDidMount() {
    const generateMessage = (msg, type) => {
      const INDEX = $('.chat-msg').length + 1;
      const str = `
      <div id='cm-msg-${INDEX}' class="chat-msg ${type}">
      <div id='cm-msg-${INDEX}' class="chat-msg ${type}">
            <span class="msg-avatar">
                <img src="./assets/chat-icon.svg" alt="chat-icon" class="chat-icon">          
            </span>
          <div class="cm-msg-text">
            ${msg}
          </div>
        </div>
      `;

      $('.chat-logs').append(str);
      $(`#cm-msg-${INDEX}`).hide().fadeIn(300);
      if (type === 'self') {
        $('#chat-input').val('');
      }
      $('.chat-logs').stop().animate({ scrollTop: $('.chat-logs')[0].scrollHeight }, 1000);
    };

    $('#chat-submit').click(function (e) {
      e.preventDefault();
      const msg = $('#chat-input').val();
      if (msg.trim() === '') {
        return false;
      }
      generateMessage(msg, 'self');
      const buttons = [
        { name: 'Existing User', value: 'existing' },
        { name: 'New User', value: 'new' },
      ];
      setTimeout(() => {
        generateMessage(msg, 'user');
      }, 1000);
    });

    $(document).delegate('.chat-btn', 'click', function () {
      const value = $(this).attr('chat-value');
      const name = $(this).html();
      $('#chat-input').attr('disabled', false);
      generateMessage(name, 'self');
    });

    $('#chat-circle, .chat-box-toggle').click(function () {
      $('#chat-circle, .chat-box').toggle('scale');
    });
  }

  render() {
    return (
      <div className="chat-container">
        <div id="body">
         <div className="chat-box">
            <div className="chat-box-body">
              <div className="chat-box-overlay"></div>
              <div className="chat-logs"></div>
            </div>
            <div id="chat-input-box">
              <form>
                <input type="text" id="chat-input" placeholder="Send a message..." />
                <button type="submit" className="chat-submit" id="chat-submit">
                  <BsSend className='icon-send'/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
