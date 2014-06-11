class RemotesController < ApplicationController
  respond_to :json
  
  def index
    respond_with Remote.all
    # @remotes = Remote.all
    # respond_to do |format|
    #   format.json { render json: @remotes }
    # end    
  end

  def show
    @remote = Remote.find(params[:id]) rescue nil
    respond_to do |format|
      format.html
    end
  end

  def create
    @remote = Remote.new(model_params)
    respond_to do |format|
      if @remote.save
        format.json { render json: @remote, status: :created }
      else
        format.json { render json: @remote.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @remote = Remote.find(params[:id]) rescue nil
    respond_to do |format|
      if @remote.update!(model_params)
        format.json { render json: nil, status: :ok }
      else
        format.json { render json: @remote.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @remote = Remote.find(params[:id]) rescue nil
    @remote.destroy
    respond_to do |format|
      format.json { render json: nil, status: :ok }
    end
  end

  private
   def model_params
     params.require(:remote).permit(:remote, :name, :note, :url)
   end
end
