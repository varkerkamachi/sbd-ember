class NotesController < ApplicationController
  respond_to :json
  
  def index
    respond_with Note.all
    # @notes = Note.all rescue nil
    # respond_to do |format|
    #   format.json { render json: @notes }
    # end
  end

  def show
    @note = Note.find(params[:id]) rescue nil
    respond_to do |format|
      format.html
    end
  end

  def create
    @note = Note.new(params[:note])
    respond_to do |format|
      if @note.save
        format.json { render json: @note, status: :created }
      else
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @note = Note.find(params[:id]) rescue nil
    respond_to do |format|
      if @note.update_attributes(params[:note])
        format.json { render json: nil, status: :ok }
      else
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @note = Note.find(params[:id]) rescue nil
    @note.destroy
    respond_to do |format|
      format.json { render json: nil, status: :ok }
    end
  end
end
