class NotesController < ApplicationController
  def index
    @notes = Note.all rescue nil
    respond_to do |format|
      format.html
    end
  end

  def new
    @note = Note.new
  end

  def edit
    @note = Note.new
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
