class IngredientsController < ApplicationController
    
    before_action :set_recipe

    def index
        ingredients = @recipe.ingredients
        render json: ingredients
    end
    
    def create
        ingredient = @recipe.ingredients.new(ingredient_params)
        if ingredient.save
            render json: @recipe
        else
            render json: {error: 'Error saving ingredient'}
        end
    end

    def destroy
        ingredient = Ingredient.find(params[:id])
        ingredient.destroy
    end

    private

    def set_recipe
        @recipe = Recipe.find(params[:recipe_id])
    end

    def ingredient_params
        params.require(:ingredient).permit(:name, :recipe_id)
    end
end
