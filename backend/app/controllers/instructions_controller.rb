class InstructionsController < ApplicationController
    before_action :set_recipe

    def index
        instructions = @recipe.instructions
        render json: instructions
    end
    
    def create
        instruction = @recipe.instructions.new(instruction_params)
        if instruction.save
            render json: @recipe
        else
            render json: {error: 'Error saving instruction'}
        end
    end

    def destroy
        instruction = Instruction.find(params[:id])
        recipe = Recipe.find(instruction.recipe_id)
        instruction.destroy
        render json: recipe
    end

    private

    def set_recipe
        @recipe = Recipe.find(params[:recipe_id])
    end

    def instruction_params
        params.require(:instruction).permit(:content, :recipe_id)
    end
end