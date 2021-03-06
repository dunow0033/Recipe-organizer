class RecipesController < ApplicationController
    def index
        recipe = Recipe.all
        render json: recipe
    end

    def create
        recipe = Recipe.new(recipe_params)
        if recipe.save
            render json: recipe
        else
            render json: {error: "Error creating recipe"}
        end
    end

    def show
        recipe = Recipe.find(params[:id])
        render json: recipe
    end

    def destroy
        recipe = Recipe.find(params[:id])
        recipe.destroy
        render json: recipe, status: :ok
    end

    private

    def recipe_params
        params.require(:recipe).permit(:name)
    end
end
